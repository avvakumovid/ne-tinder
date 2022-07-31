import React, { FC, useState } from 'react';

type Props = {
  file: any;
};

const ImagePreview: FC<Props> = ({ file }) => {
  const [preview, setPreview] = useState<any>(null);
  const reader = new FileReader();
  reader.readAsDataURL(file[0]);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div>
      <img src={preview} alt="preview" width="200px" height="200px" />
    </div>
  );
};

export default ImagePreview;
