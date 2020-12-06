# How to schedule notification with Firebase

1. Lancer postman
2. Dans la barre url , entrer l'url qui va faire office d'envoyer une requête post vers l'API Google de Firebase à 
 l'url suivante: https://fcm.googleapis.com/fcm/send Ne pas oublier de définir le verbe en POST
3. Dans le body de la requête, rentrer les informations suivantes :
  {
    "notification": {
      "title": "titre de la notification",
      "body": "Description de la notification",
      "click_action": "http://localhost:3000/"
     },
      to: "THE GENERATE TOKEN"
  }
 4. Ensuite, dans le header il faut définir le content-type en key et value application/json et Authorization sera la clé secrète de l'application 
 (AAAAZi53PAI:APA91bEvhnqkxjk4OY_bOPiRpL5IjgO1zQq9tvFrFxs4dKTXTBC3gXXl4Pzme1FmyROM4K9mYMjcoDChSJ-BjpROJCneOy6KCvnuJ1grcxT2KuQO5ZAHZ8sIzYJM3x_BDZ-VU93UjinR)
5. Enfin lorsque tout a été renseigné, exécuter la requête. Si tout va bien , une notification devrait apparaitre sur l'écran de l'application.
