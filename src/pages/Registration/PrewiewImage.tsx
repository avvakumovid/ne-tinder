import React, { FC, useState } from 'react';

type Props = {
  file: any;
};

export const PrewiewImage: FC<Props> = ({ file }) => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <div>
      <img
        src={preview?.toString()}
        alt="preview"
        width="200px"
        height="200px"
      />
    </div>
  );
};
