import React from "react";
import {
  ICommandBarItemProps,
  CommandBar,
} from "@fluentui/react/lib/CommandBar";
import { Text, ITextProps } from "@fluentui/react/lib/Text";
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
// Style
import styles from "../../Main/styles.module.scss";
import { Link } from "react-router-dom";

const BOMList = () => {
  const items: ICommandBarItemProps[] = [
    {
      key: "newItem",
      text: "New",
      onClick: () => {
        alert("Add New BOM");
      },
      iconProps: { iconName: "Add" },
    },
    {
      key: "uploadBOM",
      text: "Upload BOM",
      onClick: () => {
        alert("Upload BOM");
      },
      iconProps: { iconName: "Upload" },
    },
  ];

  const bomItems = [
    {
      id: 1,
      name: "BOM 1",
    },
    {
      id: 2,
      name: "BOM 2",
    },
  ];

  const bomColumns: IColumn[] = [
    {
      key: "column1",
      name: "Id",
      fieldName: "id",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column2",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ];

  const onRenderBomColumn = (item: any, index: number, column: IColumn) => {
    const fieldContent = item[column.fieldName] as string;
    switch (column.key) {
      case "name":
        return <Link to={`/bom/${item.id}`}>{fieldContent}</Link>;
      default:
        return <span>{fieldContent}</span>;
    }
  };

  return (
    <div>
      <CommandBar
        items={items}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
      <div className={styles.title}>List of BOM</div>
      <DetailsList
        items={bomItems}
        setKey="set"
        layoutMode={DetailsListLayoutMode.justified}
        onRenderItemColumn={onRenderBomColumn}
        // selection={this._selection}
        // selectionPreservedOnEmptyClick={true}
        // ariaLabelForSelectionColumn="Toggle selection"
        // ariaLabelForSelectAllCheckbox="Toggle selection for all items"
        // checkButtonAriaLabel="Row checkbox"
        // onItemInvoked={this._onItemInvoked}
      />
    </div>
  );
};

export default BOMList;
