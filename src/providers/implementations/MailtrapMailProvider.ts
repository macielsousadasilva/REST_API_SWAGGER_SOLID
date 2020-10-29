import { IMailProvider, IMessage } from "../IMailProvider";
import nodemail from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider{
    private transporter: Mail;

    constructor() {
        this.transporter = nodemail.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: 'd2afd262641cf1',
                pass: '5c193e5472a17e'
            }

        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body            
        })
    }
}