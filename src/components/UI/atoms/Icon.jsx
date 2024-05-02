import React, { useEffect, useState } from 'react';

function Icon({ iconName }) {
  const [Icon, setIcon] = useState(null);

  useEffect(() => {
    const importIcon = async () => {
      const { default: IconComponent } = await import (`lucide-react/${iconName}`);
      setIcon(() => IconComponent);
    };

    importIcon();
  }, [iconName]);

  if (!Icon) {
    return <div>Loading...</div>;
  }

  return <Icon />;
}

export default Icon;

