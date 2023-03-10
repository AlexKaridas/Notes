import styles from '../efodia.module.scss';
import Link from 'next/link';

const page = () => {
    return (
        <div className={styles.main}>
            <Link className={styles.button} href='/'><div className={styles.button}>back</div></Link>
            <h1> Αρχές Εφοδιαστικής</h1>

            <h2>Διάλεξη 1</h2>

            <h2>Τι ονοµάζουµε εφοδιαστική αλυσίδα</h2>

            <p>
                Οι διαδικασίες που συνδέουν τις επιχειρήσεις µε σχέσεις προµηθευτή-χρήστη από τα αρχικά ακατέργαστα υλικά ως τα ολοκληρωµένα προϊόντα για τελική κατανάλωση.
                Σε µια συνήθη εφοδιαστική αλυσίδα ακατέργαστα υλικά αποκτώνται, προϊόντα παράγονται σε ένα ή περισσότερα εργοστάσια, φορτώνονται για αποθήκες για ενδιάµεση αποθήκευση και τέλος µεταφέρονται σε λιανοπωλητές ή πελάτες. Για την µείωση του κόστους και την αύξηση του επίπεδου εξυπηρέτησης πρέπει να εφαρµοσθούν αποτελεσµατικές στρατηγικές διαχείρισης της αλυσίδας εφοδιασµού οι οποίες θα λαµβάνουν υπόψη τους τις αλληλεπιδράσεις µεταξύ των διαφόρων επιπέδων της αλυσίδας εφοδιασµού. Η αλυσίδα εφοδιασµού που ονοµάζεται πολλές φορές και δίκτυο εφοδιασµού (logistics network) αποτελείται από προµηθευτές, βιοµηχανικά κέντρα, αποθήκες, σηµεία διανοµής και σηµεία λιανικής πώλησης. Μέσα σε αυτό ακατέργαστα υλικά, προϊόντα υπό εξέλιξη και ολοκληρωµένα προϊόντα ρέουν µεταξύ των εγκαταστάσεων.
            </p>



            <h2>Να δοθεί ένα παράδειγµα µιας εφοδιαστικής αλυσίδας</h2>
            <p>
                Ας θεωρήσουµε ένα πελάτη ο οποίος µπαίνει σε ένα κατάστηµα Υπερ-Μαρινόπουλος για να αγοράσει απορρυπαντικό. Η εφοδιαστική αλυσίδα ξεκινά µε τον πελάτη και την ανάγκη αγοράς απορρυπαντικού. Ο επόµενος κρίκος-κόµβος της εφοδιαστικής αλυσίδας είναι το κατάστηµα λιανικής πώλησης (Υπερ-Μαρινόπουλος) που επισκέπτεται ο πελάτης.
                Ποιος ο Αντικειµενικός στόχος µιας εφοδιαστικής αλυσίδας; Αντικειµενικός στόχος µιας εφοδιαστικής αλυσίδας είναι η µεγιστοποίηση της καθαρής αξίας που δηµιουργείται από το όλο σύστηµα.
            </p>

            <h2>Τι ροές λαµβάνουν χώρα σε µια εφοδιαστική αλυσίδα;</h2>
            <p>
                Η εφοδιαστική αλυσίδα είναι ένα δυναµικό σύστηµα εντός του οποίου συνεχώς ρέουν πληροφορίες, προϊόντα και χρηµατικοί πόροι.
            </p>

            <h2>Τι είναι η διαχείριση της εφοδιαστικής αλυσίδας;</h2>
            <p>
                Η Διαχείριση της εφοδιαστικής αλυσίδας (Supply Chain Management) συνεπάγεται τον χειρισµό των ροών µεταξύ των διάφορων επιπέδων της αλυσίδας έτσι ώστε να µεγιστοποιείται η ολική κερδοφορία.
            </p>
            <h2>
                Λόγω ποιων αιτίων και ποιων συγκυριών οδηγηθήκαµε στην διαχείριση της εφοδιαστικής αλυσίδας;
            </h2>
            <p>
                Ο έντονος ανταγωνισµός σε παγκόσµια κλίµακα, η εισαγωγή προϊόντων µε σύντοµους κύκλους ζωής και η αυξανόµενη δύναµη του καταναλωτή (αυξηµένες απαιτήσεις, πολλές δυνατότητες επιλογών) έχουν εξαναγκάσει τις επιχειρήσεις να εστιάσουν την προσοχή τους και να επενδύσουν στις εφοδιαστικές τους αλυσίδες.
            </p>

            <h2>
                Οι αποφάσεις που λαµβάνονται σε µια εφοδιαστική αλυσίδα σε πόσες και ποιες κατηγορίες ταξινοµούνται;
            </h2>
            <ol>
                <li>Στρατηγικές αποφάσεις</li>
                <li>Τακτικές αποφάσεις</li>
                <li>Λειτουργικές αποφάσεις</li>
            </ol>
            <h2>
                Πώς κατηγοριοποιούνται οι διαδικασίες σε µια εφοδιαστική αλυσίδα βάσει της άποψης του κύκλου διαδικασιών;
            </h2>
            <ol>
                <li>Κύκλος παραγγελίας πελάτη</li>
                <li>Κύκλος αναπλήρωσης</li>
                <li>Κύκλος παραγωγής</li>
                <li>Κύκλος προµηθειών</li>
            </ol>

            <h2>Πώς κατηγοριοποιούνται οι διαδικασίες σε µια εφοδιαστική αλυσίδα βάσει της άποψης push-pull;</h2>

            <p>Οι Pull διεργασίες ξεκινούν από τους πελάτες σαν απόκριση στις παραγγελίες τους.

                Οι Push διεργασίες είναι αυτές που ξεκινούν από τις προβλέψεις για τη ζήτηση

                των πελατών.

                Οι Pull χαρακτηρίζονται ως αναδραστικές (reactive) και κατά τη διάρκεια της εκτέλεσης τους η ζήτηση είναι γνωστή.

                Οι Push διεργασίες χαρακτηρίζονται ως προβλεπόµενες (speculative) γιατί αναφέρονται σε προβλεπόµενη και όχι πραγµατική ζήτηση.</p>



            <h2>Τι σηµαίνει ανταγωνιστική στρατηγική µιας επιχείρησης</h2>

            <p>(Competitive Strategy);

                Ως ανταγωνιστική στρατηγική µιας επιχείρησης ορίζεται το σύνολο των αναγκών της αγοράς που η επιχείρηση προσανατολίζεται να ικανοποιήσει µέσω των προϊόντων και των υπηρεσιών της (στο που στοχεύει).</p>



            <h2>Τι σηµαίνει στρατηγική µιας εφοδιαστικής αλυσίδας (Supply Chain strategy).</h2>

            <p> Η στρατηγική µιας εφοδιαστικής αλυσίδας καθορίζει το πως αποκτούνται οι πρώτες ύλες, τη µεταφορά των υλικών προς και από την επιχείρηση, την παραγωγή του προϊόντος ή τη λειτουργία για την παροχή της υπηρεσίας και της διανοµής – παράδοσης του προϊόντος στον πελάτη µαζί µε οποιαδήποτε υπηρεσία µετά την πώληση.</p>



            <h2>  Βασικά εργαλεία (drivers) στη διοίκηση µιας εφοδιαστικής αλυσίδας.</h2>

            <p> Αποθέµατα

                Μεταφορές

                Εγκαταστάσεις

                Πληροφορία</p>



            <h2>Διάλεξη 2</h2>

            <h2>Ο σχεδιασµός δικτύου τι είδους απόφαση είναι;</h2>

            <p> Οι αποφάσεις αυτές είναι στρατηγικής σηµασίας.</p>



            <h2> Από τι επηρεάζεται η µορφή του δικτύου διανοµών;</h2>

            <p> Από τη στρατηγική της εφοδιαστικής αλυσίδας.</p>



            <h2> Με ποια κριτήρια αξιολογείται ένα δίκτυο διανοµών ;</h2>

            <p> Ποιες ανάγκες των πελατών καλύπτονται

                Με τι κόστος επιτυγχάνεται η κάλυψη των πελατειακών αναγκών.</p>



            <h2>  Τι αποφάσεις λαµβάνονται κατά το σχεδιασµό του δικτύου µιας εφοδιαστικής αλυσίδας;</h2>

            <p> Λειτουργία εγκαταστάσεων

                Τοποθεσία εγκαταστάσεων

                Κατανοµή δυναµικότητας

                Κατανοµή αγορών και προµηθευτών

                Δώστε τον ορισµό της ανταποκρισιµότητας µιας εφοδιαστικής αλυσίδας

                Δυνατότητα επίτευξης στόχου ή ικανοποίησης των απαιτήσεων κάποιου</p>



            <h2> Διάλεξη 7</h2>

            <h2> ΔΏƩΤΕ ΤΟΝ ΟΡΙƩΜΌ ΤΟΥ ΦΟΡΤΩΤΉ ΚΑΙ ΤΟΝ ΟΡΙƩΜΌ ΤΟΥ ΜΕΤΑΦΟΡΈΑ</h2>

            <p> Ο φορτωτής είναι η εταιρεία που ζητά τη µετακίνηση των προϊόντων µεταξύ δύο σηµείων της εφοδιαστικής αλυσίδας. Ο µεταφορέας είναι η εταιρεία που αναλαµβάνει τη µεταφορά των προϊόντων.

            </p>

            <h2> Ποιοι οι δυνατοί συνδυασµοί µεταφορών σε µια εφοδιαστική αλυσίδα;</h2>

            <p> – Αεροπορικές µεταφορές.

                – Οδικές µεταφορές (φορτηγά).

                – Ʃιδηροδροµικές µεταφορές.

                – Ακτοπλοϊκές µεταφορές.

                – Αγωγοί µεταφορών (δίκτυα σωληνώσεων).

                – Ʃυνδυασµένες µεταφορές.

            </p>

            <h2> Ταξινοµειστε µε βαση το µεταφορικο κοστος σε αυξουσα σειρα τα µεταφορικα µεσα</h2>

            <p>–Ʃιδηρόδροµος

                –Πλοία

                –φορτηγά µε πλήρες φορτίο,

                –φορτηγά µε µη πλήρες φορτίο,

                –µεταφορικές δεµάτων,

                –αεροπλάνα
            </p>

            <h2>
                Τι σηµαίνει ο όρος προσαρµοσµένες µεταφορές;</h2>

            <p> Η χρήση διαφορετικών δικτύων και µέσων µεταφορών ανάλογα µε τα χαρακτηριστικά των πελατών και των εµπορευµάτων.

            </p>

            <h2> Διάλεξη 8</h2>

            <h2>  Ποια χαρακτηριστικά πρέπει να διαθέτουν οι πληροφορίες για να είναι χρήσιµες;</h2>

            <p> Ακριβης

                Γρηγορη

                Ʃωστη

            </p>

            <h2>  Δώστε την περιγραφή και τον ορισµό του φαινοµένου της διαταραχής (bullwhip effect).</h2>

            <p> Η αύξηση της διακύµανσης − αυξοµείωσης των παραγγελιών προς την

                ανωφερή κατεύθυνση στην εφοδιαστική αλυσίδα, από τους λιανοπωλητές προς τους χονδρέµπορους και από τους παραγωγούς προς τους προµηθευτές ονοµάζεται φαινόµενο της ακαταστασίας - bullwhip effect
            </p>


            <h2>  Ʃε ποια µέτρα απόδοσης στην εφοδιαστική αλυσίδα έχει επίδραση το bullwhip effect;</h2>

            <p> Ʃτα κόστη παραγωγής.

                Ʃτα κόστη αποθήκευσης.

                Ʃτο χρόνο αναπλήρωσης.

                Ʃτα κόστη µεταφοράς.

                Ʃτα εργατικά κόστη αποστολής και παραλαβής.

                Ʃτο επίπεδο διαθεσιµότητας προϊόντος.

                Ʃτις σχέσεις µεταξύ της αλυσίδας.

            </p>

            <h2>  Ποιες οι Αιτίες εµφάνισης του bullwhip φαινόµενου;</h2>

            <p> Η πρόβλεψη της ζήτησης

                Χρόνος ολοκλήρωσης − εκτέλεσης παραγγελίας

                Παραγγελία σε δέσµες

                Η διακύµανση των τιµών

                Διογκωµένες − Φουσκωµένες παραγγελίες

            </p>

            <h2> Ποιοι Τρόποι µείωσης του φαινόµενου bullwhip υπάρχουν;</h2>

            <p> Η µείωση της αβεβαιότητας,

                η µείωση της µεταβλητότητας της εξωτερικής ζήτησης,

                η µείωση των χρόνων εκτέλεσης παραγγελιών και

                η σύναψη στρατηγικών συνεργασιών
            </p>


            <h2> Εξεταστική</h2>

            <h2>  ερ 1) Δώστε τον ορισµό του φορτωτή και του µεταφορέα</h2>
            <p>
                Ο φορτωτής είναι η εταιρεία που ζητά τη µετακίνηση των προϊόντων µεταξύ δύο σηµείων της εφοδιαστικής αλυσίδας. Ο µεταφορέας είναι η εταιρεία που αναλαµβάνει τη µεταφορά των προϊόντων. Για παράδειγµα, το IKEA (φορτωτής) συνεργάζεται µε την εταιρεία Δελατόλας (µεταφορέας) για την παράδοση των προϊόντων της στους καταναλωτές.

            </p>

            <h2>  ερ 2) Πώς κατηγοριοποιούνται οι διαδικασίες σε µια εφοδιαστική αλυσίδα βάσει της άποψης του κύκλου διαδικασιών;</h2>
            <p>
                Κύκλος παραγγελίας πελάτη

                Κύκλος αναπλήρωσης

                Κύκλος παραγωγής

                Κύκλος προµηθειών

            </p>



            <h2> ερ 3) Τι σηµαίνει ανταγωνιστική στρατηγική µιας επιχείρησης</h2>
            <p>
                (Competitive Strategy);

                Ως ανταγωνιστική στρατηγική µιας επιχείρησης ορίζεται το σύνολο των αναγκών της αγοράς που η επιχείρηση προσανατολίζεται να ικανοποιήσει µέσω των προϊόντων και των υπηρεσιών της (στο που στοχεύει).

            </p>

            <h2> ερ 4) α) Ποιες οι Αιτίες εµφάνισης του bullwhip φαινόµενου; β) Ποιοι Τρόποι µείωσης του φαινόµενου bullwhip υπάρχουν;</h2>
            <p>
                α)

                Η πρόβλεψη της ζήτησης

                Χρόνος ολοκλήρωσης − εκτέλεσης παραγγελίας

                Παραγγελία σε δέσµες

                Η διακύµανση των τιµών

                Διογκωµένες − Φουσκωµένες παραγγελίες

                β)

                Η µείωση της αβεβαιότητας,

                η µείωση της µεταβλητότητας της εξωτερικής ζήτησης,

                η µείωση των χρόνων εκτέλεσης παραγγελιών και

                η σύναψη στρατηγικών συνεργασιών


            </p>
            <h2>  ερ 5) Ποιοι οι δυνατοί συνδυασµοί µεταφορών σε µια εφοδιαστική αλυσίδα;</h2>
            <p>
                – Αεροπορικές µεταφορές.

                – Οδικές µεταφορές (φορτηγά).

                – Ʃιδηροδροµικές µεταφορές.

                – Ακτοπλοϊκές µεταφορές.

                – Αγωγοί µεταφορών (δίκτυα σωληνώσεων).

                – Ʃυνδυασµένες µεταφορές.

            </p>

            <h2> ερ 6) Οι αποφάσεις που λαµβάνονται σε µια εφοδιαστική αλυσίδα σε πόσες και ποιες κατηγορίες ταξινοµούνται;</h2>
            <p>
                Ʃτρατηγικές αποφάσεις

                Τακτικές αποφάσεις

                Λειτουργικές αποφάσεις

            </p>
        </div>
    )
}

export default page