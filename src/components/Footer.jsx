'use client';
import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          {/* Social Links */}
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <Link href="#" target="_blank" rel="noreferrer">
                <Image
                  className="main-footer__icon"
                  src="/assets/img/linkedin-ico.png"
                  alt="linkedin icon"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href="#" target="_blank" rel="noreferrer">
                <Image
                  className="main-footer__icon"
                  src="/assets/img/github-ico.png"
                  alt="github icon"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>

          {/* About / Bio */}
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">James (Freddie) Farr</h4>
            <p className="main-footer__short-desc">
              Passionate frontend developer based in the UK, specialising in React and building
              polished, accessible interfaces.
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          © {new Date().getFullYear()} Freddie Farr. Built with React & Next.js.
        </div>
      </div>
    </footer>
  );
}
