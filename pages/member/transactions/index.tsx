import Sidebar from "@/components/organisms/Sidebar";
import TransactionContent from "@/components/organisms/TransactionContent";
import { NextApiRequest } from "next";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
