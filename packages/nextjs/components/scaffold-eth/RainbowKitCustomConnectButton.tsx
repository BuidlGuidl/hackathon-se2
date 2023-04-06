import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { TAutoConnect, useAutoConnect, useNetworkColor } from "~~/hooks/scaffold-eth";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

// todo: move this later scaffold config.  See TAutoConnect for comments on each prop
const tempAutoConnectConfig: TAutoConnect = {
  enableBurnerWallet: true,
  autoConnect: true,
};

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
  useAutoConnect(tempAutoConnectConfig);

  const networkColor = useNetworkColor();
  const configuredNetwork = getTargetNetwork();

  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openConnectModal, openChainModal, mounted }) => {
        const connected = mounted && account && chain;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button className="btn btn-secondary btn-sm" onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <>
                    <span className="text-xs" style={{ color: networkColor }}>
                      {configuredNetwork.name}
                    </span>
                    <button className="btn btn-sm btn-error ml-2" onClick={openChainModal} type="button">
                      <span>Wrong network</span>
                      <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
                    </button>
                  </>
                );
              }

              return (
                <div className="px-2 flex justify-end items-center">
                  <div className="flex justify-center items-center border-1 rounded-lg">
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="btn btn-secondary btn-sm px-2 shadow-md"
                    >
                      <BlockieAvatar address={account.address} size={24} ensImage={account.ensAvatar} />
                      <span className="ml-2 mr-1">{account.displayName}</span>
                      <span>
                        <ChevronDownIcon className="h-6 w-4" />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
