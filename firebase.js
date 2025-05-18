<!-- firebase.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDxzmgN0tAJv27T2h2JWsnpgQDZNoUguns",
    authDomain: "ourstory-shared.firebaseapp.com",
    projectId: "ourstory-shared",
    storageBucket: "ourstory-shared.appspot.com",
    messagingSenderId: "912303672959",
    appId: "1:912303672959:web:d86696d49305c86877794a"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
</script>
