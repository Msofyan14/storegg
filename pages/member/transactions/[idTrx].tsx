import TransactionDetailContent from "@/components/organisms/TransactionDetailContent";
import { HistoryTransactionsTypes } from "@/services/data-types";
import { getTransactionDetail } from "@/services/member";

interface transactionDetailProps {
  transactionDetail: HistoryTransactionsTypes;
}

export default function TransactionsDetail(props: transactionDetailProps) {
  const { transactionDetail } = props;
  console.log(transactionDetail);
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  console.log(params);
  const { idTrx } = params;
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
  const response = await getTransactionDetail(idTrx, jwtToken);
  console.log("response", response);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
