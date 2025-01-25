import React from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";
import myImage from '../img/logo.png';
import { TwitterOutlined, FacebookOutlined, YoutubeOutlined, InstagramOutlined, PinterestOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-lg mb-4">E-Store</h3>
          <p className="text-gray-700 text-sm">
            E-Store Inc. is a Black, disabled, woman-owned business on a mission to tell better stories about life with chronic illness or disability.
          </p>
          <img src={myImage} alt="E-Store Revolution Logo" className="mt-4 w-32 h-auto ml-6 " />
          <div className="flex space-x-4 mt-4">
            <TwitterOutlined className="text-xl hover:text-blue-500" />
            <FacebookOutlined className="text-xl hover:text-blue-600" />
            <YoutubeOutlined className="text-xl hover:text-red-500" />
            <InstagramOutlined className="text-xl hover:text-pink-500" />
            <PinterestOutlined className="text-xl hover:text-red-400" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-700 hover:underline">Our Story</Link></li>
            <li><Link to="/faq" className="text-gray-700 hover:underline">FAQ</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:underline">Contact us</Link></li>
            <li><Link to="/terms" className="text-gray-700 hover:underline">Terms of Service</Link></li>
            <li><Link to="/returns" className="text-gray-700 hover:underline">Returns & Shipping</Link></li>
            <li><Link to="/gift-cards" className="text-gray-700 hover:underline">Gift Card Balance</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><Link to="/designs" className="text-gray-700 hover:underline">All Designs</Link></li>
            <li><Link to="/gift-cards" className="text-gray-700 hover:underline">Gift Cards</Link></li>
            <li><Link to="/instagram" className="text-gray-700 hover:underline">Shop Our Instagram</Link></li>
            <li><Link to="/affiliate" className="text-gray-700 hover:underline">Disability Affiliate Program</Link></li>
            <li><Link to="/promotions" className="text-gray-700 hover:underline">DEI Promotional Items</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Disability Inclusion Magazine</h3>
          <ul className="space-y-2">
            <li><Link to="/magazine" className="text-gray-700 hover:underline">Disability Inclusion Magazine</Link></li>
            <li><Link to="/writing" className="text-gray-700 hover:underline">Writing Submissions</Link></li>
            <li><Link to="/mental-health" className="text-gray-700 hover:underline">'Our Stories' a Mental Health Video Series</Link></li>
            <li><Link to="/advice" className="text-gray-700 hover:underline">Ask Aimee – Parenting Disabled Children Advice</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Select
            defaultValue="Pakistan (AUD $)"
            style={{ width: 200 }}
            options={[
              { value: "Pakistan", label: "Pakistan (AUD $)" },
              { value: "USA", label: "USA (USD $)" },
              { value: "UK", label: "UK (GBP £)" },
            ]}
          />
          <p className="text-sm text-gray-600">© 2024 E-Store. If you can be anything, Be Inclusive.™</p>
          <ul className="flex space-x-4 text-sm text-gray-600">
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/returns" className="hover:underline">Returns & Shipping</Link></li>
            <li><Link to="/cookies" className="hover:underline">Cookies Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:underline">Medical Advice Disclaimer</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
