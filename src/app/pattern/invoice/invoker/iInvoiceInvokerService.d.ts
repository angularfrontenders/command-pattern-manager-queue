import { IInvoice } from '../../iInvoice';
import { IInvokerService } from '../../iInvokerService';
import { CommandName } from '../commands/commands';

export interface IInvoiceInvokerService extends IInvokerService {
    invokeInvoiceCommand(commandName: CommandName): void;
}
