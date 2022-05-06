import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "39f589482ccfbf",
        pass: "64006ca9fd0ea0"
    }
});
export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget  <oi@feedback.com> ',
            to: ' Yan Brendon <yanbrendon@hotmail.com>',
            subject,
            html: body,
        })
    }
}