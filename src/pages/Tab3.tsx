import React, { useState } from 'react';
import { IonCheckbox } from '@ionic/react';

import './Tab3.css';

function Tab3() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={`page ${checked ? 'checked' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <IonCheckbox checked={checked} onIonChange={handleCheckboxChange}>
        Themed checkbox
      </IonCheckbox>
      </div>
    </div>
  );
}

export default Tab3;