import { useState } from 'react';
import FormAction from './FormAction';
import { Link } from 'react-router-dom';
interface OtpInputProps {
  length: number;
  onChange: any;
  handleSubmit: any;
}

const OTPInput = ({ length, onChange , handleSubmit }: OtpInputProps) => {
  const [otp, setOtp] = useState(Array(length).fill(''));

  const handleChange = (element: any, index: number) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Move to the next input field
    if (value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      e.target.previousSibling.focus();
    }
  };


  return (

    <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
      <div className='flex items-center justify-center gap-3'>
        {otp.map((data, index) => (
          <input
            key={index}
            placeholder={(index + 1).toString()}
            type="text"
            maxLength={1}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={(e) => e.target.select()}
            className='!w-12 h-12 input-custom text-center text-2xl font-medium  rounded p-4 outline-none'
          />
        ))}
      </div>
      <FormAction handleSubmit={handleSubmit}  text="Verify" />
      <div className="text-sm text-text text-center">Didn't receive code? <Link to={'/'} className="font-medium text-link hover:linkHover">Resend</Link></div>
    </form>
  );
};

export default OTPInput;
