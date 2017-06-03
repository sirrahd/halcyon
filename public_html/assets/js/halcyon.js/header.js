if( !localStorage.getItem("current_id")       |
    !localStorage.getItem("current_instance") |
    !localStorage.getItem("current_authtoken")
  ){

  // If not logged in, redirect to login page
  location.href="/login";

} else {

  if( $.cookie("session") === "true" ) {
    // If alredy sessioned, refresh pages
    refreshApp();
  } else if ( $.cookie("session") === undefined ) {
    // If first session or restarted browser,
    // get own profile again and then refres
    resetApp();
  }

}