import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'

const LAST_UPDATED = 'April 11, 2026'

export default function CookiePolicy() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section bg-navy-deep">
          <div className="section-padding">
            <div className="text-center text-white">
              <h1 className="heading-1 mb-6">Cookie Policy</h1>
              <p className="text-xl max-w-3xl mx-auto text-light-blue leading-8">
                How we use cookies and similar tracking technologies on our website.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section">
          <div className="section-padding max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="heading-2 mb-4">1. What Are Cookies</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                      when you visit a website. They help the website remember information about your visit.
                    </p>
                    <p>
                      Cookies are widely used to make websites work more efficiently and to provide information 
                      to website owners.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">2. How We Use Cookies</h2>
                  <div className="space-y-4 body-text">
                    <p>We use cookies for several purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                      <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                      <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
                      <li><strong>Marketing Cookies:</strong> Used to deliver advertisements relevant to you</li>
                      <li><strong>Analytics Cookies:</strong> Help us measure and improve our website performance</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">3. Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    <div className="bg-off-white p-6 rounded-[1.4rem] border border-light-grey shadow-soft">
                      <h3 className="heading-3 mb-3">Essential Cookies</h3>
                      <p className="body-text mb-2">
                        These cookies are necessary for the website to function and cannot be switched off in our systems.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Authentication and security</li>
                        <li>Shopping cart contents</li>
                        <li>Load balancing</li>
                      </ul>
                    </div>

                    <div className="bg-off-white p-6 rounded-[1.4rem] border border-light-grey shadow-soft">
                      <h3 className="heading-3 mb-3">Performance Cookies</h3>
                      <p className="body-text mb-2">
                        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Google Analytics</li>
                        <li>Vercel Analytics</li>
                        <li>Page load times</li>
                      </ul>
                    </div>

                    <div className="bg-off-white p-6 rounded-[1.4rem] border border-light-grey shadow-soft">
                      <h3 className="heading-3 mb-3">Functional Cookies</h3>
                      <p className="body-text mb-2">
                        These cookies enable the website to provide enhanced functionality and personalization.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Language preferences</li>
                        <li>Remembering your choices</li>
                        <li>Customized content</li>
                      </ul>
                    </div>

                    <div className="bg-off-white p-6 rounded-[1.4rem] border border-light-grey shadow-soft">
                      <h3 className="heading-3 mb-3">Marketing Cookies</h3>
                      <p className="body-text mb-2">
                        These cookies may be set through our site by our advertising partners.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>LinkedIn Pixel</li>
                        <li>Google Ads</li>
                        <li>Facebook Pixel</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">4. Managing Your Cookie Preferences</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      You can control and/or delete cookies as you wish. You can delete all cookies that are 
                      already on your device and you can set most browsers to prevent them from being placed.
                    </p>
                    <div className="bg-gold-50 p-6 rounded-[1.4rem] border border-gold-200 shadow-soft">
                      <p className="font-semibold text-gold-600 mb-2">To manage cookies:</p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                        <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                        <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">5. Third-Party Cookies</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      In some special cases we also use cookies provided by trusted third parties. The following 
                      third-party cookies may be used on our website:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Google Analytics:</strong> For website analytics and performance measurement</li>
                      <li><strong>Vercel Analytics:</strong> For performance monitoring and optimization</li>
                      <li><strong>LinkedIn:</strong> For professional networking and advertising</li>
                      <li><strong>Google Ads:</strong> For advertising and remarketing</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">6. Cookie Consent</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      When you first visit our website, you will see a cookie consent banner. This banner allows 
                      you to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Accept all cookies</li>
                      <li>Accept only essential cookies</li>
                      <li>Customize your cookie preferences</li>
                      <li>Manage your preferences at any time</li>
                    </ul>
                    <p>
                      Your preferences are stored for 12 months, after which you'll be asked to renew your consent.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">7. Updates to This Policy</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in our use of cookies 
                      or for other operational, legal, or regulatory reasons.
                    </p>
                    <p>
                      Please revisit this Cookie Policy regularly to stay informed about our use of cookies.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">8. Contact Us</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      If you have any questions about this Cookie Policy, please contact us:
                    </p>
                    <div className="bg-off-white p-6 rounded-[1.4rem] border border-light-grey shadow-soft">
                      <p><strong>Email:</strong> privacy@mylescorptech.com</p>
                      <p><strong>Phone:</strong> +254 743 993 715</p>
                      <p><strong>Address:</strong> Wester Heights, Westlands, Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-light-grey">
                <p className="small-text text-medium-grey">
                  Last updated: {LAST_UPDATED}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center">
              <h2 className="heading-2 mb-4">Manage Your Cookie Preferences</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                You can update your cookie preferences at any time through our cookie settings panel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Manage Cookie Settings</Button>
                <Button variant="secondary">Review Privacy Policy</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
