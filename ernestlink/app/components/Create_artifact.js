import "@/app/css/index.css";
import "@/app/css/mediaQueries.css";

export default function Create_artifact(props)
{
  return <div className={ props.page == "login" ? "login" : "sideimage" }></div>;
}
