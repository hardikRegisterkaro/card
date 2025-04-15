import UserReviews from "../component/crousel/UserReviews";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <UserReviews />
    </div>
  );
}
