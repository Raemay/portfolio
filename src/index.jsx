import Home from "./pages/Home"

const Routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "Home",
          element: <Home />,
        }
    ]
}];
  
  export default Routes;