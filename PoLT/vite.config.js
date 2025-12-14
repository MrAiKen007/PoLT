import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'site-lib',
                    dest: ''
                }
            ]
        })
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                analise_de_riscos: resolve(__dirname, 'analise-de-riscos.html'),
                arquitetura_mesh_offline: resolve(__dirname, 'arquitetura-mesh-offline.html'),
                comparativo_seguranca_bitcoin: resolve(__dirname, 'comparativo-seguranca-bitcoin.html'),
                conceito_polt: resolve(__dirname, 'conceito-polt.html'),
                consenso_k_of_n: resolve(__dirname, 'consenso-k-of-n.html'),
                estrategia_l2_ton: resolve(__dirname, 'estrategia-l2-ton.html'),
                introducao_inovacao: resolve(__dirname, 'introducao-inovacao.html'),
                regras_de_seguranca: resolve(__dirname, 'regras-de-seguranca.html'),
                validacao_bluetooth: resolve(__dirname, 'validacao-bluetooth.html'),
                whitepaper_l2_ton: resolve(__dirname, 'whitepaper-l2-ton.html'),
                whitepaper_tecnico_v1: resolve(__dirname, 'whitepaper-tecnico-v1.html'),
            },
        },
    },
});
