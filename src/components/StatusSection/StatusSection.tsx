import styles from "@components/StatusSection/statusSection.module.scss";

const StatusSection = () => {
  return(
    <section className={styles.statusSection}>
      <p className={styles.statusSection__status}>You win!</p>
      <p className={styles.statusSection__statusMsg}>Well done! 🎉</p>
    </section>
  )
}

export default StatusSection;