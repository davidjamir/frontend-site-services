import type { Metadata } from 'next'
import { siteService } from "@/services/site.service"

export const metadata: Metadata = {
    title: 'Contact Us',
}

export default async function ContactPage() {
    const siteOrigin = await siteService.getRequestOrigin()
    const domain = siteOrigin.host

    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <article className="prose prose-neutral max-w-none">
                <h1>Contact Us</h1>

                <p>
                    If you have any questions about us, You can contact Us:
                </p>

                <ul>
                    <li>
                        By email:{" "}
                        <a href={`mailto:support@${domain}`}>
                            support@{domain}
                        </a>
                    </li>
                </ul>
            </article>
        </main>
    );
}