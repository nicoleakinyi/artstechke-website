import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded text-blue-600 font-bold text-sm flex items-center justify-center">
                NT
              </div>
              <span className="font-bold text-xl">ARTSKE</span>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Empowering youths with quality STEM education and cutting-edge tools through our makerspace.
              Bridging gaps for equitable access, fostering creativity in addressing real-world challenges
              effectively, envisioning a brighter future for all.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-blue-100 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-blue-100 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#education" className="text-blue-100 hover:text-white transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#makerspace" className="text-blue-100 hover:text-white transition-colors">
                  Makerspace
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-blue-100 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-blue-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-100">Ecobank Building, Molyko, Buea, Cameroon</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-100">(+237) 679 999 763 | 653 872 862</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-100">(+237) 672 686 115 | 671 735 572</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-100">info@ARTSKE.cc</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-start lg:justify-end items-start">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                    <Youtube className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-blue-500 text-center">
          <p className="text-blue-200">
            ©2025, ARTSKE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
