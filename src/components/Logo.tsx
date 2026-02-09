import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Image 
        src="/images/sanewal-auto-logo.jpg"
        alt="Sanewal Auto Engineers logo"
        width={90}
        height={20}
        className="h-auto"
        priority
      />
    </div>
  );
};

export default Logo;