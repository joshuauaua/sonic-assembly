import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '8rem 2rem 4rem',
            lineHeight: '1.6',
            color: 'var(--text-primary)'
        }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
            
            <section style={{ marginBottom: '2rem' }}>
                <p>Last updated: December 30, 2025</p>
                <p>
                    Sonic Assembly operate(s) the https://sonicassembly.se website (the "Service").
                    This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Information Collection and Use</h2>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                
                <h3 style={{ fontSize: '1.2rem', margin: '1rem 0 0.5rem' }}>Types of Data Collected</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>
                        <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                        <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Cookies and Usage Data</li>
                        </ul>
                    </li>
                    <li style={{ marginTop: '0.5rem' }}>
                        <strong>Usage Data:</strong> We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Use of Data</h2>
                <p>Sonic Assembly uses the collected data for various purposes:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>To provide and maintain the Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                    <li>To monitor the usage of the Service</li>
                    <li>To detect, prevent and address technical issues</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Transfer of Data</h2>
                <p>
                    Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
                </p>
                <p>
                    If you are located outside Sweden and choose to provide information to us, please note that we transfer the data, including Personal Data, to Sweden and process it there.
                </p>
                <p>
                    Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Disclosure of Data</h2>
                <p>Sonic Assembly may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>To comply with a legal obligation</li>
                    <li>To protect and defend the rights or property of Sonic Assembly</li>
                    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>To protect the personal safety of users of the Service or the public</li>
                    <li>To protect against legal liability</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. Security of Data</h2>
                <p>
                    The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>6. Your Rights Under GDPR</h2>
                <p>
                    If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Sonic Assembly aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                </p>
                <p>
                    In certain circumstances, you have the following data protection rights:
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li><strong>The right to access, update or to delete the information we have on you.</strong></li>
                    <li><strong>The right of rectification.</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
                    <li><strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</li>
                    <li><strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your personal information.</li>
                    <li><strong>The right to data portability.</strong> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</li>
                    <li><strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where Sonic Assembly relied on your consent to process your personal information.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>7. Service Providers</h2>
                <p>
                    We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
                </p>
                <p>
                    These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>By email: <a href="mailto:hej@sonicassembly.com" style={{ color: 'inherit', textDecoration: 'underline' }}>hej@sonicassembly.com</a></li>
                </ul>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
