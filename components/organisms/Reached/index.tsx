import ReachedItem from "@/components/molecules/ReachedItem";
import BorderLine from "@/components/molecules/ReachedItem/BorderLine";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem value="290M+" desc="Players Top Up" />
          <BorderLine />
          <ReachedItem value="12.500" desc="Games Available" />
          <BorderLine />
          <ReachedItem value="99,9%" desc="Happy Players" />
          <BorderLine />
          <ReachedItem value="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
