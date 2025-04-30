import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Image 
        src="https://assets.co.dev/b35f6e55-a561-4256-b736-a57e2dc1ec82/sanewal-auto-logo-f709ecb.png"
        alt="Sanewal Auto Engineers logo"
        width={180}
        height={40}
        className="h-auto"
        priority
      />
    </div>
  );
};

export default Logo;