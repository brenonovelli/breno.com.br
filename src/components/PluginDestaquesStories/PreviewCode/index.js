import React, { useEffect, useMemo } from 'react';

import Prism from 'prismjs';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CopyAlt } from 'styled-icons/boxicons-regular/';

import { Button } from '../../Button';

const PreviewCode = ({ options, data, copied, setCopied }) => {
  const code = useMemo(() => {
    return `
<script>
  const storiesOptions = {
    apenasNoMobile: ${options.apenasNoMobile},
    apenasNaHome: ${options.apenasNaHome},
    zoomNoHover: ${options.zoomNoHover},
    local: "${options.local}",
    instagramColor: ${options.instagramColor},
    corPrincipal: ${
      options.corPrincipal && options.corPrincipalChange
        ? `"${options.corPrincipal}"`
        : null
    },
    corControles: ${
      options.corControles && options.corControlesChange
        ? `"${options.corControles}"`
        : null
    },
    corSetasControles: ${
      options.corSetasControles && options.corSetasControlesChange
        ? `"${options.corSetasControles}"`
        : null
    },
  };

  const storiesItem = [${data.map(
    item =>
      `
    {
      text: ${item.text ? `"${item.text}"` : null},
      link: ${item.link ? `"${item.link}"` : null},
      image: ${item.image ? `"${item.image}"` : null},
      tag: ${item.tag ? `"${item.tag}"` : null},
      badge: ${item.badge ? `"${item.badge}"` : null},
    }`
  )}
  ];

  window.userToken_B9DST = "${options.token}";
</script>

<script src="https://cdn.awsli.com.br/1606/1606323/arquivos/destaqueStories-v1.0.4-b9l.js"></script>
`.trim();
  }, [data, options]);

  useEffect(() => {
    Prism.highlightAll();
  }, [options, data]);

  return (
    <>
      <pre className="previewCode">
        <div className="copyCode">
          <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
            <Button type="button">
              <CopyAlt />{' '}
              {copied
                ? 'Copiado. Agora cole no painel da loja.'
                : 'Copiar o código'}
            </Button>
          </CopyToClipboard>
        </div>
        <code className="language-javascript">{code}</code>
      </pre>
    </>
  );
};

export default PreviewCode;
