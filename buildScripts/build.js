import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";
import { red, green, yellow } from "chalk";

process.env.NODE_ENV = "production";
console.log(green("build started ...this will take some time ... "));
webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(red(err));

    return 1;
  }
  const jsonStats = stats.toJson();
  if (jsonStats.hasError) {
    return jsonStats.errors.map((error) => console.log(red(error)));
  }
  if (jsonStats.hasWarning) {
    console.log(yellow("webpack generated the following warnings"));
    jsonStats.warning.map((warning) => console.log(yellow(warning)));
  }
  console.log(`Webpack stats : ${stats}`);

  // if we got this far , the build will succeed
  console.log(green("Your app has been build and writtent to the dist/ "));
  return 0;
});
