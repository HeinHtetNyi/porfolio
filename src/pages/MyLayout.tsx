import Layout from "@theme/Layout";
import { CustomProvider } from "rsuite";

export default function MyLayout({ children }) {
  return (
    <CustomProvider theme="light">
      <Layout>{children}</Layout>
    </CustomProvider>
  );
}
