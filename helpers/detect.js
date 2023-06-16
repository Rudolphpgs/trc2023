module.exports.register = function (Handlebars, options, params) {
  Handlebars.registerHelper("bodyClass", function (options) {
    var bodyClass = "",
      pageName = this.page.basename;
    if (pageName === "index" || pageName === "index_ar") {
      bodyClass = "home__page";
    } else {
      bodyClass = "inner__page";
    }

    if (pageName.substring(0, 9) === "dashboard") {
      bodyClass += " dashboardTemplate";
    }
    return bodyClass;
  });

  Handlebars.registerHelper("pageClass", function (options) {
    var pageClass = "__" + this.page.basename;
    return pageClass;
  });

  Handlebars.registerHelper("dir", function (options) {
    var page = this.page.basename,
      rtl = "";
    if (page.slice(-3) == "_ar") {
      rtl = "rtl";
    } else {
      rtl = "ltr";
    }

    return rtl;
  });

  Handlebars.registerHelper("isRTL", function (condition, options) {
    var pName = this.page.basename;
    if (pName.lastIndexOf("_ar") > 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("isPage", function (condition, options) {
    //console.log(this.page.basename, condition, options, "ggg");
    var lastIndex = this.page.basename.lastIndexOf("_ar");
    var str = this.page.basename.substring(0, lastIndex);

    if (condition === this.page.basename || condition === str) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("style", function (options) {
    var style = "";
    if (this.page.basename === "index" || this.page.basename === "index_ar") {
      style = "main";
    }
    // else if(this.page.basename === "application" || this.page.basename === "application_ar") {
    //   style = "application";
    // }
    else {
      style = "page";
    }
    return style;
  });
  // ---------------//

  Handlebars.registerHelper("menuActiveClass", function (v1, options) {
    var lastIndex = this.page.basename.lastIndexOf("_ar");
    var str = this.page.basename.substring(0, lastIndex);
    if (v1 === this.page.basename || v1 === str) {
      return "active";
    }
    return "";
  });

  Handlebars.registerHelper("menuLink", function (v1, options) {
    if (this.page.basename.lastIndexOf("_ar") > 0) {
      page_link = v1 + "_ar.html";
    } else {
      page_link = v1 + ".html";
    }
    return page_link;
  });

  Handlebars.registerHelper("langName", function (v1, v2, options) {
    if (this.page.basename.lastIndexOf("_ar") > 0) {
      lang_name = v1;
    } else {
      lang_name = v2;
    }
    return lang_name;
  });

  Handlebars.registerHelper("lang_switch", function (options) {
    var page = this.page.basename;

    if (page.lastIndexOf("_ar") > 0) {
      return page.slice(0, -3) + ".html";
    } else {
      return page + "_ar.html";
    }
  });
};
