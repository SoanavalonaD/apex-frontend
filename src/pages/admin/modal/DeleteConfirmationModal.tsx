import React from 'react';

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    carTitle: string;
    loading?: boolean;
}

export const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    carTitle,
    loading = false
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop (Arrière-plan flouté) */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={loading ? undefined : onClose}
            />

            {/* Contenu du Modal */}
            <div className="bg-[#141416] border border-white/10 rounded-xl max-w-md w-full p-6 md:p-8 z-10 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">

                {/* Icône d'avertissement */}
                <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-5">
                    <span className="material-symbols-outlined text-[28px]">warning</span>
                </div>

                {/* Titres */}
                <h3 className="text-white font-headline-sm text-lg font-semibold mb-2">
                    Supprimer le véhicule ?
                </h3>
                <p className="text-on-surface-variant font-body-md text-sm mb-6 leading-relaxed">
                    Êtes-vous sûr de vouloir retirer définitivement la <span className="text-white font-medium">{carTitle}</span> de la flotte Apex ? Cette action est irréversible.
                </p>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row sm:justify-end gap-3 font-label-md text-sm">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="px-5 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50"
                    >
                        Annuler
                    </button>
                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={loading}
                        className="px-5 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-w-[120px]"
                    >
                        {loading ? (
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            <span>Confirmer</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};