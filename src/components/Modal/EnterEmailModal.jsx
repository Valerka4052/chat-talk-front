import { Input, InputWrapper, MainContainer, MainText, SecondaryText, LabelWrapper, Error } from "./EnterEmailModal.styled";
import { Formik, Form, } from "formik";
import { Email } from '@/images/svg';
import { resetPassword } from "../../redux/auth/operations";
import { validations } from "../../utils/Schemas/validations";
import { AuthBtn } from "../Buttons/AuthBtn";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Loader } from "../../utils";
import { FormFieldError } from "../FormFieldError/FormFieldError";

export const EnterEmailModal = ({ onClose, onOpenRecieved }) => {
    const dispatch = useDispatch();
    const [load, setLoad] = useState(false);
    return (
        <MainContainer>
            <MainText>Forgot password</MainText>
            <SecondaryText>Enter your email address, and we&apos;ll send you a link to reset your password</SecondaryText>
            <Formik
                validationSchema={validations.emailSchema}
                initialValues={{ email: '' }}
                onSubmit={async ({ email }, { setSubmitting }) => {
                    setLoad(true)
                    const res = await dispatch(resetPassword({ email }));
                    setLoad(false)
                    if (res.meta.requestStatus === "rejected") return;
                    onClose();
                    onOpenRecieved();
                    setSubmitting(false);
                }} >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <LabelWrapper>Email</LabelWrapper>
                        <InputWrapper style={{ position: 'relative' }}>
                            <Email />
                            <Input type="text" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Email address" error={Boolean(errors.email && touched.email)} />
                        </InputWrapper>
                        <Error>{errors.email && touched.email && <FormFieldError title={errors.email } />}</Error>
                        <AuthBtn disabled={load} from="emailModal" />
                    </Form>)}
            </Formik>
            {load && <Loader />}
        </MainContainer>
    );
};

EnterEmailModal.propTypes = {
    onClose: PropTypes.func,
    onOpenRecieved: PropTypes.func,
};

