import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import LangCorrectAPI, { RegisterUser } from '../api';
import RegisterForm from '../components/auth/RegisterForm';
import { Link } from "react-router-dom";


const RegisterPage = () => {
    const register = async (formData: RegisterUser) => {
        const resp = await LangCorrectAPI.register(formData);
        console.log("🚀 ~ file: RegisterPage.tsx:12 ~ register ~ resp:", resp);
    };


    return (
        <Box minHeight={"100vh"} sx={{
            background: "linear-gradient(157deg, rgba(2,0,36,1) 0%, rgba(97,116,208,1) 78%, rgba(0,212,255,1) 98%)",
        }}>
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" minHeight={"100vh"}>

                    <Card sx={{ width: 550, marginTop: 3, p: 2 }}>
                        <CardContent>
                            <Stack direction="row" justifyContent="space-between" py={2}>
                                <Typography variant="h5" gutterBottom>
                                    Register
                                </Typography>
                                <Button component={Link} to="/login">Already have an account?</Button>
                            </Stack>
                            <RegisterForm onRegister={register}/>
                        </CardContent>
                    </Card>

                </Box>
            </Container>
        </Box>
    );
};

export default RegisterPage;
