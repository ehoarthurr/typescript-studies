function sendReview(review: boolean | number) {
  if (!review) {
    console.log("O usuário não deixou uma nota!");
  } else {
    if (review === 1) {
      console.log("O usuário deu nota 1");
    } else if (review === 2) {
      console.log("O usuário deu nota 2");
    } else if (review === 3) {
      console.log("O usuário deu nota 3");
    } else if (review === 4) {
      console.log("O usuário deu nota 4");
    } else if (review === 5) {
      console.log("O usuário deu nota 5");
    }
  }
}

sendReview(false);
sendReview(1);
sendReview(3);
