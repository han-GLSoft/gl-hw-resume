import React, { useState } from 'react';
import ig_icon from '../../assets/ig_icon.png';
import fb_icon from '../../assets/fb_icon.png';
import mail_icon from '../../assets/mail_icon.png';

interface ContactButtonProps {
  email: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ email }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    setIsHovered(!isHovered);
  };

  const handleMailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div
      style={{
        position: 'relative',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <div
        onClick={handleContactClick}
        style={{
          position: 'relative',
          whiteSpace: 'nowrap',
          backgroundColor: '#0057B8',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '10px',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        Contact Me
      </div>

      {isHovered && (
        <div
          className="contact-options"
          style={{
            display: 'flex',
            justifyItems: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
          }}
        >
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={fb_icon}
              alt="Facebook"
              style={{ width: '40px', height: '40px' }}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ig_icon}
              alt="Instagram"
              style={{ width: '40px', height: '40px' }}
            />
          </a>
          <button
            onClick={handleMailClick}
            style={{ backgroundColor: '#ffffff', border: '0' }}
          >
            <img
              src={mail_icon}
              alt="Mail"
              style={{ width: '40px', height: '40px' }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactButton;
