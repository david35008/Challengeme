import React from 'react';
import { styled } from '@mui/system';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const data = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};

const StyledTreeView = styled(SimpleTreeView)(({ theme }) => ({
  height: 110,
  flexGrow: 1,
  maxWidth: 400,
}));

export default function RecursiveTreeView() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <StyledTreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      defaultExpanded={['root']}
    >
      {renderTree(data)}
    </StyledTreeView>
  );
}
