import { BaseAuthLayout } from "../components/Auth/Base";
import { RegisterForm } from "../components/Auth/Register";
import Link from "next/link";

const styles = {
  marginTop: 30,
  textAlign: "center",
};

const Register = () => {
  return (
    <div>
      <BaseAuthLayout>
        <RegisterForm />

        <div style={styles}>
          <Link href="/login">Registered Before? Signin Now!</Link>
        </div>
      </BaseAuthLayout>
    </div>
  );
};

export default Register;
