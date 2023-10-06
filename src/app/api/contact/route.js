import { NextResponse } from 'next/server';

import * as mailer from '../../../utils/mailer';

const myEmail = process.env.MY_EMAIL;

export async function POST(req) {
  const body = await req.json();

  const { name, email } = body;

  try {
    const html = mailer.createHTMLTamplate(body);

    const mailOption = {
      html,
      to: myEmail,
      from: `${name} <${email}>`,
      subject: 'Contact Message',
    };

    await mailer.sendMailAsync(mailOption);

    return NextResponse.json({
      msg: 'Thank You!! Your message has been successfully received!',
    });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({ msg: 'Sever Error' }, { status: 500 });
  }
}
