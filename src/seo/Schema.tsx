import React from 'react';

interface SchemaProps {
  data: Record<string, any>;
}

export const Schema: React.FC<SchemaProps> = ({ data }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
};
