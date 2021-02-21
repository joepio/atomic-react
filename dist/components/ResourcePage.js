import React from "../pkg/react.js";
import {properties, urls} from "../helpers/urls.js";
import {useString, useResource, useTitle} from "../atomic-react/hooks.js";
import {ResourceStatus} from "../atomic-lib/resource.js";
import AllProps from "./AllProps.js";
import {ContainerNarrow} from "./Containers.js";
import Markdown from "./datatypes/Markdown.js";
import Collection from "./CollectionPage.js";
import ClassDetail from "./ClassDetail.js";
import NewInstanceButton from "./NewInstanceButton.js";
import {useHistory} from "../pkg/react-router-dom.js";
import {editURL} from "../helpers/navigation.js";
import {ButtonMargin} from "./Button.js";
function ResourcePage({subject}) {
  const [resource] = useResource(subject);
  const title = useTitle(resource);
  const history = useHistory();
  const [description] = useString(resource, properties.description);
  const [klass] = useString(resource, properties.isA);
  const status = resource.getStatus();
  if (status == ResourceStatus.loading) {
    return /* @__PURE__ */ React.createElement(ContainerNarrow, null, "Loading...");
  }
  if (status == ResourceStatus.error) {
    return /* @__PURE__ */ React.createElement(ContainerNarrow, null, resource.getError().message);
  }
  switch (klass) {
    case urls.classes.collection:
      return /* @__PURE__ */ React.createElement(Collection, {
        resource
      });
  }
  return /* @__PURE__ */ React.createElement(ContainerNarrow, {
    about: subject
  }, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement(ClassDetail, {
    resource
  }), description && /* @__PURE__ */ React.createElement(Markdown, {
    text: description
  }), /* @__PURE__ */ React.createElement(AllProps, {
    resource,
    except: [properties.shortname, properties.description, properties.isA, properties.name]
  }), klass == urls.classes.class && /* @__PURE__ */ React.createElement(NewInstanceButton, {
    klass: subject
  }), /* @__PURE__ */ React.createElement(ButtonMargin, {
    type: "button",
    onClick: () => history.push(editURL(subject))
  }, "edit"));
}
export default ResourcePage;