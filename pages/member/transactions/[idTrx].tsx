import TransactionDetailContent from "@/components/organisms/TransactionDetailContent";
import { JWTPayloadTypes, UserTypes } from "@/services/data-types";
import jwtDecode from "jwt-decode";
import { NextApiRequest } from "next";

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent />
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
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  return {
    props: {
      user: userFromPayload,
    },
  };
}
