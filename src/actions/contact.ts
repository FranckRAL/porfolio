"use server";

import  prisma  from "@/lib/db";
import { contactSchema } from "@/lib/validations/contact";
import { revalidatePath } from "next/cache";
import { sendNotificationEmail } from '@/lib/mail';

export async function sendContactMessage(formData: FormData) {
  const rawData = {
    email: formData.get("email"),
    name: formData.get("name"),
    subject: formData.get("subject"),
    content: formData.get("content"),
  };

  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: "Invalid Datas, Please Check Your Inputs!",
      details: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {

    const saved = await prisma.message.create({
      data: {
        email: validatedFields.data.email,
        name: validatedFields.data.name || null, 
        subject: validatedFields.data.subject,
        content: validatedFields.data.content,
      },
    });

    if(saved){
        sendNotificationEmail(
          validatedFields.data.name || 'Visitor',
          validatedFields.data.email,
          validatedFields.data.subject,
          validatedFields.data.content 
      );
    }
    

    revalidatePath("/admin/messages");

    return { success: "Message Sent Successfully" };
  } catch (error) {
    console.error("Erreur Prisma:", error);
    return { error: "A Technical Error Occurred, Please Try again!" };
  }
}

export async function markAsRead(id: string) {
  try {
    await prisma.message.update({
      where: { id },
      data: { isRead: true },
    });
    
    revalidatePath("/admin/messages");
    return { success: true };
  } catch (error) {
    return { error: "Impossible de mettre à jour le message." };
  }
}


export async function deleteMessage(id: string) {
  try {
    await prisma.message.delete({
      where: { id },
    });
    
    revalidatePath("/admin/messages");
    return { success: true };
  } catch (error) {
    return { error: "Erreur lors de la suppression." };
  }
}