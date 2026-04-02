import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0b1120] text-[#94a3b8] py-16 px-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">


                <div className="md:w-1/3">
                    <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
                    <p className="text-sm leading-relaxed">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>


                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Product</h3>
                        <ul className="space-y-3 text-sm">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">Social Links</h3>
                        <div className="flex gap-3">
                            <div className="bg-white p-2 rounded-full text-black flex items-center justify-center w-8 h-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                            </div>
                            <div className="bg-white p-2 rounded-full text-black flex items-center justify-center w-8 h-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </div>
                            <div className="bg-white p-2 rounded-full text-black flex items-center justify-center w-8 h-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.25h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto pt-8 mt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>© 2026 Digitools. All rights reserved.</p>
                <div className="flex gap-6">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Cookies</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;