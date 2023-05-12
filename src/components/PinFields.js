import React, { useRef } from 'react';

function PinFields() {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const handleInputChange = (ref, prevRef, nextRef, value) => {
    if (value && value.length > 0) {
      nextRef.current.focus();
    } else {
      prevRef.current.focus();
    }
  };

  return (
    <div>
      <label>Enter PIN:</label>
      <input
        type="password"
        maxLength="1"
        size="1"
        ref={pin1Ref}
        onChange={(e) =>
          handleInputChange(pin1Ref, null, pin2Ref, e.target.value)
        }
      />
      <input
        type="password"
        maxLength="1"
        size="1"
        ref={pin2Ref}
        onChange={(e) =>
          handleInputChange(pin2Ref, pin1Ref, pin3Ref, e.target.value)
        }
      />
      <input
        type="password"
        maxLength="1"
        size="1"
        ref={pin3Ref}
        onChange={(e) =>
          handleInputChange(pin3Ref, pin2Ref, pin4Ref, e.target.value)
        }
      />
      <input
        type="password"
        maxLength="1"
        size="1"
        ref={pin4Ref}
        onChange={(e) =>
          handleInputChange(pin4Ref, pin3Ref, null, e.target.value)
        }
      />
    </div>
  );
}

export default PinFields;
