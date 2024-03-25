console.log("array examples")
const blogPosts = [
    "My first blog post",
    "My second blog post",
    "My third blog post",
  ];

  console.log(blogPosts);

  console.log(blogPosts[2]); //this should log the array with an index of 2 in the console log ('my third blog post')
  console.log(blogPosts[1]); 
  blogPosts[3] = "My fourth blog post";
  console.log(blogPosts);

  const favFood = ["rice", "chips", "chicken"]

  console.log(favFood);
  favFood[3]= "fish";
  console.log(favFood);

  favFood.push ("water");
  console.log(favFood);
  favFood.splice(2, 0, "Eba");
  console.log(favFood);
  favFood.unshift("Banana");
  console.log(favFood);
  favFood.splice(5, 1, ); // using splice to remove the item with an index of 5 from the array - notice the last paramater is empty as we dont want to add a new element
  console.log(favFood);

  favFood.pop(); // using the pop method to remove the last element of an array
  console.log(favFood);