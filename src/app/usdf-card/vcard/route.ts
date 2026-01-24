import { NextResponse } from 'next/server'

export async function GET() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Patel;Hasmukh;;Dr.;
FN:Dr. Hasmukh Patel
ORG:US Dairy & Foods Consulting LLC
TITLE:USA's Top Food & Dairy Solutions Partner
TEL;TYPE=CELL,VOICE:+1-605-690-6080
EMAIL;TYPE=WORK,INTERNET:usdfconsulting@gmail.com
EMAIL;TYPE=WORK,INTERNET:hpatel@usdf.com
ADR;TYPE=WORK:;;5605 Weston Ln N;Plymouth;MN;55446;USA
URL:https://usdf.com
NOTE:Dairy & Foods Consulting
REV:${new Date().toISOString()}
END:VCARD`

    return new NextResponse(vcard, {
        headers: {
            'Content-Type': 'text/vcard; charset=utf-8',
            'Content-Disposition': 'attachment; filename="contact.vcf"',
        },
    })
}
