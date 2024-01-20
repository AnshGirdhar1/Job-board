import PrimaryBlueButton from '../PrimaryBlueButton/PrimaryBlueButton';
import './PrimaryForm.css';
import { useForm } from 'react-hook-form';

const PrimaryForm = ({
  formTitle,
  formFields,
  fieldsBottomContent,
  submitButtonText,
  formFooterContent,
  onSubmit,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const mapFormFields = () => {
    return formFields.map((field) => {
      const fieldBorderColor = errors[field.name] ? '#dc0202' : '#aeaeae';
      return (
        <div>
          <input
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            error={errors[field.name]}
            {...register(field.name, field.constraints)}
            style={{
              border: `1px solid ${fieldBorderColor}`,
            }}
          />
          {errors[field.name] && (
            <span className='field-error-display'>
              {errors[field.name]['message']}
            </span>
          )}
        </div>
      );
    });
  };

  return (
    <div className='primary-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>{formTitle}</h2>
        <div className='form-fields'>{mapFormFields()}</div>
        <div>{fieldsBottomContent}</div>
        <PrimaryBlueButton>{submitButtonText}</PrimaryBlueButton>
        <div>{formFooterContent}</div>
      </form>
    </div>
  );
};

export default PrimaryForm;
