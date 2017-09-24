import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "./link-config-panel.scss";
import TabPanels from "../../../components/tab-panel";

export default class LinkConfigPanel extends Component {
  static propTypes = {
    setSectionData: PropTypes.func.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      link: this.props.link
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create() {
    var link = document.getElementById("ref-href");
    var href = link.value;
    var type = link.dataset.linkType || "none";
    if (href !== "") {
      if (type === "email" && href.indexOf("mailto://") === -1)
        href = "mailto://" + href;
      this.props.setSectionData(this.props.id, [this.props.name, "link"], {
        type,
        href
      });
    }
  }
  remove() {
    this.props.setSectionData(
      this.props.id,
      [this.props.name, "link", "type"],
      "none"
    );
  }
  renderOptionPanel(tab) {
    if (tab === 0) {
      let defaultValue = "";
      if (this.props.link.type === "page") {
        defaultValue = this.props.link.href;
      }
      return (
        <div>
          <select
            className={style["href-input"]}
            id="ref-href"
            data-link-type="page"
            defaultValue={defaultValue}
          >
            <option value="/page-1">Page 1</option>
            <option value="/page-2">Page 2</option>
            <option value="/page-3">Page 3</option>
          </select>
        </div>
      );
    }
    if (tab === 1) {
      let defaultValue = "";
      if (this.props.link.type === "website") {
        defaultValue = this.props.link.href;
      }
      return (
        <div>
          <input
            id="ref-href"
            data-link-type="website"
            defaultValue={defaultValue}
            type="text"
            className={style["href-input"]}
            placeholder="Enter url here..."
          />
        </div>
      );
    }
    let defaultValue = "";
    if (this.props.link.type === "email") {
      defaultValue = this.props.link.href;
    }
    return (
      <div>
        <input
          id="ref-href"
          data-link-type="email"
          type="email"
          defaultValue={defaultValue}
          className={style["href-input"]}
          placeholder="Mail to..."
        />
      </div>
    );
  }
  render() {
    const Header = ({ selectTab, activeTab }) => {
      return (
        <ul className={style["tab-header"]}>
          <li
            onMouseDown={e => {
              e.stopPropagation();
              e.preventDefault();
              this.setState({ type: "page" });
              selectTab(0);
            }}
            className={activeTab === 0 ? style["active"] : null}
            key={0}
          >
            Page
          </li>
          <li
            onMouseDown={e => {
              e.stopPropagation();
              e.preventDefault();
              this.setState({ type: "website" });
              selectTab(1);
            }}
            className={activeTab === 1 ? style["active"] : null}
            key={1}
          >
            Website
          </li>
          <li
            onMouseDown={e => {
              e.stopPropagation();
              e.preventDefault();
              this.setState({ type: "email" });
              selectTab(2);
            }}
            className={activeTab === 2 ? style["active"] : null}
            key={2}
          >
            Email
          </li>
        </ul>
      );
    };

    const Panels = ({ activeTab }) => {
      this.activeTab = activeTab;

      return (
        <div className={style["tab-body"]} key="link-tab-body">
          {this.renderOptionPanel(activeTab)}
        </div>
      );
    };
    const LinksTabPanels = TabPanels({
      id: this.props.id + this.props.name + "animation",
      Header,
      Panels
    });

    return (
      <div className={style["container"]} key="link-panel">
        <LinksTabPanels className={style["tab-panel"]} key="link-tab" />
        <div className={style["action"]}>
          <button className={style["no-border"]} onClick={this.remove}>
            Remove Link
          </button>
          <button className={classnames(style["right"])} onClick={this.create}>
            Create
          </button>
        </div>
      </div>
    );
  }
}
